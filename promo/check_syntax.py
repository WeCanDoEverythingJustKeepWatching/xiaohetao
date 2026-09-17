import re

with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

errors = []
for i, line in enumerate(content.split("\n"), 1):
    if (
        "<" in line
        and not line.strip().startswith("<!--")
        and not line.strip().startswith("/*")
    ):
        if line.count('"') % 2 != 0 and (
            "=" in line or "src" in line or "href" in line
        ):
            errors.append(f"Line {i}: possible unclosed quote")

js_sections = re.findall(r"<script>.*?</script>", content, re.DOTALL)
for idx, js in enumerate(js_sections):
    opens = js.count("{")
    closes = js.count("}")
    if opens != closes:
        errors.append(f"Script {idx + 1}: brace mismatch ({opens} vs {closes})")
    parens_open = js.count("(")
    parens_close = js.count(")")
    if parens_open != parens_close:
        errors.append(
            f"Script {idx + 1}: paren mismatch ({parens_open} vs {parens_close})"
        )

if errors:
    for e in errors[:10]:
        print(f"ERROR: {e}")
else:
    print("No syntax errors detected")

print(f"File size: {len(content)} bytes")
