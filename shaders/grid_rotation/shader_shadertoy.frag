




const float pi = 3.1415;
void rotate(inout vec2 v, float t){
    float s = sin(t);
    float c = cos(t);
    v *= mat2(c, s, -s, c);
}

float weight = 0.05;	//枠線太さ

// Converted from Book of Shaders format

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 u_resolution = iResolution.xy;
    float u_time = iTime;
    vec2 u_mouse = iMouse.xy;


    vec2 uv = fragCoord.xy / u_resolution.xy;
    vec2 mouse = u_mouse.xy / u_resolution.xy;
    vec2 grid = fract(uv * 8.0) ; // スケール調整
    grid -= vec2(0.5);
    float r = distance(uv, mouse);
    rotate(grid ,pow(0.01, r));
    grid += vec2(0.5);
    float square = 1.0 - step(weight, grid.x) * step(weight, grid.y) * step(weight, 1.0-grid.x)* step(weight, 1.0-grid.y);	//四角形
    
    vec3 color = vec3(0.5* square/ r);
    fragColor = vec4(color, 1.0);

}
