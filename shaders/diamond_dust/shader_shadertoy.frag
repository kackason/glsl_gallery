




const float pi = 3.1415;

float r = 1.;
float n = 10.;
float delta_r = 0.;

vec2 rand2(vec2 p){
    vec2 v;
    v.x = fract(sin(p.x)*10000.0);
    v.y = fract(sin(p.y)*10000.0);

    return v;
}



// Converted from Book of Shaders format

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 u_resolution = iResolution.xy;
    float u_time = iTime;
    vec2 u_mouse = iMouse.xy;


	
    vec2 uv = fragCoord.xy / u_resolution.xy;
    
    vec3 color = vec3(0.108,0.110,0.098);
    for(float r=0.005; r<0.05; r+= 0.005){
        for(float i=1.;i<50.;i++){
            vec2 c = rand2(vec2(r+i,r-i));
            float s = 0.9 + 0.5*sin(u_time * rand2(c).x / 0.3);

    		if(distance(c, uv) < r){
            	color = (color + vec3(i / 100.  + s/8. + c.x - uv.x)) / 2. ;
        	}
        }
    }
    color += vec3(0.670,0.667,0.328) + uv.y*uv.y*uv.y*uv.y;
    
    
    fragColor = vec4(color, 1.0);

}
