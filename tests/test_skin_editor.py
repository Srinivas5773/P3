import pytest
import sys, os
sys.path.insert(0, os.path.abspath(os.path.dirname(os.path.dirname(__file__))))

def test_skin_editor_files():
    assert os.path.exists("static/js/skin_editor.js")
    assert os.path.exists("static/css/skin_editor.css")
