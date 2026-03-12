#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
const float pi = 3.1415;

void main(){
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 mouse = u_mouse.xy / u_resolution.xy;
    vec2 grid = fract(uv * 8.0) ; // スケール調整
    grid -= vec2(0.5);
    float r = distance(uv, mouse);
    float weight = r*0.5;	//枠線太さ
    grid += vec2(0.5);
    float square = 1.0 - step(weight, uv.x) * step(weight, uv.y) * step(weight, 1.0-uv.x)* step(weight, 1.0-uv.y);	//四角形
    
    vec3 color = vec3(r + square);
    gl_FragColor = vec4(color, 1.0);
}
