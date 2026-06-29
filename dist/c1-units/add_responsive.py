import os
import re

# ===== CSS cần thêm =====
RESPONSIVE_CSS = """
/* ====== IMPROVED RESPONSIVE ADD-ON ====== */
@media (max-width: 1024px) {
  #main { padding: 24px; }
}

@media (max-width: 768px) {
  body { flex-direction: column; }
  #sidebar {
    position: relative;
    width: 100%;
    height: auto;
    min-width: unset;
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
  #main {
    padding: 16px;
    max-width: 100%;
  }
  .mc-options { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 480px) {
  .mc-options { grid-template-columns: 1fr; }
  .fill-input { min-width: 80px; }
  .rewrite-input { min-width: 120px; }
  .h-item {
    grid-template-columns: 1fr;
  }
}
"""

# ===== Folder gốc =====
ROOT_DIR = "c1-units"

def process_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    if "IMPROVED RESPONSIVE ADD-ON" in content:
        print(f"⏩ Skip: {file_path}")
        return

    if "</style>" in content:
        # chèn vào style
        content = content.replace("</style>", RESPONSIVE_CSS + "\n</style>")
    else:
        # nếu không có style thì chèn trước </head>
        content = content.replace("</head>", f"<style>{RESPONSIVE_CSS}</style>\n</head>")

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"✅ Done: {file_path}")


def main():
    for root, dirs, files in os.walk(ROOT_DIR):
        for file in files:
            if file == "index.html":
                full_path = os.path.join(root, file)
                process_file(full_path)


if __name__ == "__main__":
    main()