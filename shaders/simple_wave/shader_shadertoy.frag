





float randabs(float x){
    return abs(sin(10000. * x));
}

// Converted from Book of Shaders format

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 u_resolution = iResolution.xy;
    float u_time = iTime;
    vec2 u_mouse = iMouse.xy;


	
    vec2 uv = fragCoord.xy / u_resolution.xy;
    vec3 color;
    for(float i=0.2;i<1.;i+=0.2){
        if(uv.y < 0.3*sin(2.*randabs(i*i)*uv.x + 2.*randabs(i)*u_time) +0.5){
            color.z += 0.2;
       }
    }
    
    fragColor = vec4(color, 0.5);

}
