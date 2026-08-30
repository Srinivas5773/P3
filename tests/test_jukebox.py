import pytest
import sys, os
sys.path.insert(0, os.path.abspath(os.path.dirname(os.path.dirname(__file__))))

def test_jukebox_files_exist():
    assert os.path.exists("static/js/jukebox.js")
    assert os.path.exists("static/css/jukebox.css")
