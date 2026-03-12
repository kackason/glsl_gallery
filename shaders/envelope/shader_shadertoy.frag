






// Converted from Book of Shaders format

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 u_resolution = iResolution.xy;
    float u_time = iTime;
    vec2 u_mouse = iMouse.xy;


	
    vec2 uv = fragCoord.xy / u_resolution.xy;
    vec3 color;
    for(float i=0.;i<1.;i+=0.05){
        float a = i;
    	float b = 1.-i;
        float t = a* (uv.x-b) + b* (uv.y-a);
        if(t>0.) color.yz += 0.05;
    }
    
    fragColor = vec4(color, 1.);

}
