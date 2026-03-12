




const vec2 center = vec2(0.5, 0.6);
const float pi = 3.1415;
float nGrid = 3.;

float rand(float x){
    return sin(10000. * x);
}


// Converted from Book of Shaders format

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 u_resolution = iResolution.xy;
    float u_time = iTime;
    vec2 u_mouse = iMouse.xy;


    vec2 uv = fragCoord.xy / u_resolution.xy;
    vec2 mouse = u_mouse.xy / u_resolution.xy;
    vec2 p = uv - center;
    vec3 color = vec3(0.019,0.034,0.100);
    float r = 0.600;
    float g = 0.940;
    float t = mod(0.1*(u_time-2.) , 1.);
    float vc = 0.228;
    for(float a=0.;a<pi;a+=0.15){
        for(float b=0.;b<pi;b+=0.15){
            vec2 v = vec2(r*cos(b+0.03*rand(b))*cos(a+0.03*rand(a)), r*cos(b+0.0*rand(b))*sin(a+0.03*rand(a)));
            float y = (v.y+vc)*p.x/v.x - g*p.x*p.x/2./v.x/v.x;
            float s = p.x / (v.x * t);
            if(abs(p.y - y)<0.02 && s>0. && s<1.+0.030*rand(a+b) ){
                color += vec3(1.5-s*s, 1.5-1.*s, 7.*(s-0.6)*(s-0.6)) * (0.0005/abs(p.y-y));
            }
        }
    }

	color += vec3(0.003/length(p)/t);
    
    fragColor = vec4(color, 1.);

}
