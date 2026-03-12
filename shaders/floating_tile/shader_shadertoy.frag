




const float pi = 3.1415;


// Converted from Book of Shaders format

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 u_resolution = iResolution.xy;
    float u_time = iTime;
    vec2 u_mouse = iMouse.xy;


    vec2 uv = fragCoord.xy / u_resolution.xy;
    vec2 mouse = u_mouse.xy / u_resolution.xy;
    vec2 grid = fract(uv * 8.0) ; // スケール調整
    vec2 centor = floor(uv * 8.0) / 8.0;
    float r = distance(centor, mouse);
    float weight = r*0.5;	//枠線太さ
    float square = 1.0 - step(weight, grid.x) * step(weight, grid.y) * step(weight, 1.0-grid.x)* step(weight, 1.0-grid.y);	//四角形
    
    vec3 color = vec3(r+square);
    fragColor = vec4(color, 1.0);

}
