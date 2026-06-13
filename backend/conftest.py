import os
import sys

# Ensure `import app...` works when running pytest from repo root.
ROOT = os.path.dirname(__file__)
if ROOT not in sys.path:
    sys.path.insert(0, ROOT)

