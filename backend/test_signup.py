import json
import urllib.request

url = "http://127.0.0.1:8000/signup"
data = json.dumps({"name": "test", "email": "test@gmail.com", "password": "test"}).encode("utf-8")
req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})

try:
    res = urllib.request.urlopen(req)
    print("status", res.status)
    print(res.read().decode())
except Exception as e:
    if hasattr(e, "read"):
        print("status", getattr(e, "code", None))
        print(e.read().decode())
    else:
        print("error", e)
