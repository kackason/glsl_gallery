#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
const float pi = 3.1415;
void rotate(inout vec2 v, float t){
    float s = sin(t);
    float c = cos(t);
    v *= mat2(c, s, -s, c);
}

float weight = 0.05;	//枠線太さ
void main(){
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 mouse = u_mouse.xy / u_resolution.xy;
    vec2 grid = fract(uv * 8.0) ; // スケール調整
    grid -= vec2(0.5);
    float r = distance(uv, mouse);
    rotate(grid ,pow(0.01, r));
    grid += vec2(0.5);
    float square = 1.0 - step(weight, grid.x) * step(weight, grid.y) * step(weight, 1.0-grid.x)* step(weight, 1.0-grid.y);	//四角形
    
    vec3 color = vec3(0.5* square/ r);
    gl_FragColor = vec4(color, 1.0);
}
