import re
from pathlib import Path

HEADER = """
// Converted from Book of Shaders format

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 u_resolution = iResolution.xy;
    float u_time = iTime;
    vec2 u_mouse = iMouse.xy;

"""

FOOTER = """
}
"""

def convert_shader(path):

    code = Path(path).read_text(encoding="utf-8")

    # GL_ESブロック削除
    code = re.sub(r'#ifdef GL_ES.*?#endif', '', code, flags=re.S)

    # uniform削除
    code = re.sub(r'uniform .*?;', '', code)

    # main()抽出
    main_match = re.search(r'void main\s*\(\s*\)\s*{', code)
    if not main_match:
        print("main() not found:", path)
        return

    start = main_match.end()

    # 括弧バランスでmain終了を探す
    depth = 1
    i = start
    while depth > 0 and i < len(code):
        if code[i] == "{":
            depth += 1
        elif code[i] == "}":
            depth -= 1
        i += 1

    body = code[start:i-1]

    # mainより前の部分（関数など）
    before = code[:main_match.start()]

    # 置換
    body = body.replace("gl_FragColor", "fragColor")
    body = body.replace("gl_FragCoord", "fragCoord")

    new_code = before + HEADER + body + FOOTER

    out = Path(path).with_name("shader_shadertoy.frag")
    out.write_text(new_code, encoding="utf-8")

    print("converted:", out)


for f in Path("shaders").rglob("shader.frag"):
    convert_shader(f)