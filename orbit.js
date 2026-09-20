// A small GPU-rendered scene: ray/sphere lighting and intersecting orbital planes.
// No textures, network dependencies, or continuous rendering outside the viewport.
function initializeOrbit() {
  const canvas = document.querySelector('.orbit-canvas');
  if (!canvas || canvas.dataset.initialized) return;
  canvas.dataset.initialized = 'true';
  const gl = canvas.getContext('webgl', { alpha: true, antialias: false, powerPreference: 'low-power' });
  if (!gl) return; // The original portrait remains as the fallback.
  const vertex = `attribute vec2 p; void main(){gl_Position=vec4(p,0.,1.);}`;
  const fragment = `
    precision highp float;
    uniform vec2 size;
    uniform vec2 pointer;
    uniform float time;
    mat3 tilt(float a, float b) {
      return mat3(cos(b),0.,sin(b),0.,1.,0.,-sin(b),0.,cos(b)) *
        mat3(1.,0.,0.,0.,cos(a),-sin(a),0.,sin(a),cos(a));
    }
    void main(){
      vec2 uv=(gl_FragCoord.xy-.5*size)/min(size.x,size.y);
      mat3 camera=tilt(-.38+pointer.y*.12, .18+pointer.x*.16);
      vec3 ro=camera*vec3(0.,0.,5.);
      vec3 rd=camera*normalize(vec3(uv*4.9,-5.));
      float b=dot(ro,rd), disc=b*b-dot(ro,ro)+.78*.78;
      float hit=100.;
      vec3 color=vec3(0.);
      float alpha=0.;
      float halo=exp(-length(uv)*length(uv)*19.)*.32;
      color=vec3(.12,.23,.52)*halo; alpha=halo;
      if(disc>0.){
        hit=-b-sqrt(disc);
        vec3 n=normalize(ro+rd*hit);
        vec3 q=tilt(0.,time*.09)*n;
        float bands=sin(q.y*17.+sin(q.x*5.+q.z*4.)*1.7);
        float fine=sin(q.y*55.+q.x*9.)*.07;
        vec3 base=mix(vec3(.08,.16,.34),vec3(.28,.42,.66),smoothstep(-1.,1.,bands+fine));
        float diffuse=max(dot(n,normalize(vec3(-3.,3.,4.))),0.);
        float rim=pow(1.-max(dot(n,-rd),0.),3.);
        color=base*(.13+diffuse*1.25)+vec3(.21,.42,.85)*rim*.8;
        alpha=1.;
      }
      for(int i=0;i<3;i++){
        float fi=float(i);
        vec3 normal=normalize(vec3(.18+fi*.32,1.,.32-fi*.38));
        float denom=dot(rd,normal);
        if(abs(denom)>.001){
          float t=-dot(ro,normal)/denom;
          vec3 pos=ro+rd*t;
          float radius=1.05+fi*.23;
          float dist=abs(length(pos)-radius);
          float line=1.-smoothstep(.004,.012,dist);
          if(t>0. && t<hit && line>0.){
            vec3 ink=mix(vec3(.38,.63,.92),vec3(.57,.48,.77),fi*.5);
            color=mix(color,ink,line*.6); alpha=max(alpha,line*.7);
          }
        }
      }
      // A small moon travels in a tilted orbit around the main sphere.
      vec3 moon=tilt(.45,.3)*vec3(cos(time*.18+.8)*1.29,0.,sin(time*.18+.8)*1.29);
      vec3 delta=ro-moon;
      float mb=dot(delta,rd), md=mb*mb-dot(delta,delta)+.085*.085;
      if(md>0.){
        float mt=-mb-sqrt(md);
        if(mt<hit){
          vec3 mn=normalize(ro+rd*mt-moon);
          color=vec3(.62,.73,.9)*(.2+.8*max(dot(mn,normalize(vec3(-3.,3.,4.))),0.)); alpha=1.;
        }
      }
      gl_FragColor=vec4(color,alpha);
    }`;
  const shaders = [];
  const program = gl.createProgram();
  try {
    for (const [type, source] of [[gl.VERTEX_SHADER, vertex], [gl.FRAGMENT_SHADER, fragment]]) {
      const shader = gl.createShader(type);
      shaders.push(shader);
      gl.shaderSource(shader, source); gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error('Shader unavailable');
      gl.attachShader(program, shader);
    }
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error('Renderer unavailable');
  } catch {
    shaders.forEach(shader => gl.deleteShader(shader)); gl.deleteProgram(program); return;
  }
  shaders.forEach(shader => gl.deleteShader(shader));
  gl.useProgram(program);
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, 'p');
  gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  const size = gl.getUniformLocation(program, 'size');
  const time = gl.getUniformLocation(program, 'time');
  const pointer = gl.getUniformLocation(program, 'pointer');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(pointer: fine)');
  let visible = true, frame = 0, previous = 0, elapsed = 0, x = 0, y = 0, targetX = 0, targetY = 0;
  const host = canvas.parentElement;
  host.classList.add('orbit-ready');
  function draw(now) {
    frame = 0;
    if (gl.isContextLost()) return;
    const scale = Math.min(devicePixelRatio || 1, finePointer.matches ? 1.5 : 1);
    const width = Math.max(1, Math.round(canvas.clientWidth*scale));
    const height = Math.max(1, Math.round(canvas.clientHeight*scale));
    if (canvas.width !== width || canvas.height !== height) { canvas.width=width; canvas.height=height; }
    if (!reduced.matches) elapsed += previous ? Math.min((now-previous)/1000,.05) : 0;
    previous = now;
    x += ((reduced.matches ? 0 : targetX)-x)*.06;
    y += ((reduced.matches ? 0 : targetY)-y)*.06;
    gl.viewport(0,0,width,height); gl.uniform2f(size,width,height);
    gl.uniform1f(time,reduced.matches ? 0 : elapsed); gl.uniform2f(pointer,x,y);
    gl.drawArrays(gl.TRIANGLES,0,6);
    if (visible && !document.hidden && !reduced.matches) frame=requestAnimationFrame(draw);
  }
  function resume() {
    cancelAnimationFrame(frame); previous=0;
    if (visible && !document.hidden) frame=requestAnimationFrame(draw);
  }
  host.addEventListener('pointermove', event => {
    if (!finePointer.matches || reduced.matches) return;
    const rect=host.getBoundingClientRect();
    targetX=(event.clientX-rect.left)/rect.width*2-1;
    targetY=(event.clientY-rect.top)/rect.height*2-1;
  });
  host.addEventListener('pointerleave', () => { targetX=0; targetY=0; });
  reduced.addEventListener('change', () => { x=0; y=0; resume(); });
  document.addEventListener('visibilitychange', resume);
  new ResizeObserver(resume).observe(host);
  if ('IntersectionObserver' in window) new IntersectionObserver(entries => { visible=entries[0].isIntersecting; resume(); }).observe(host);
  canvas.addEventListener('webglcontextlost', () => { cancelAnimationFrame(frame); host.classList.remove('orbit-ready'); canvas.style.display='none'; });
  resume();
}
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initializeOrbit, { once:true });
  else initializeOrbit();
}
