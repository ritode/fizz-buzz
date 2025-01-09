from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import random

# Create the FastAPI app instance
app = FastAPI()

# Add CORS middleware (if needed for frontend communication)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow any origin (replace with your frontend URL in production)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# check if the server is working
@app.get("/")
def read_root():
    return {"message": "FastAPI is working!"}

# Define your login route
@app.post("/login")
def login(credentials: dict):
    username = credentials.get("username")
    password = credentials.get("password")
    if username == "testuser" and password == "testpassword":
        return {"message": "Login successful", "username": username}
    return {"message": "Invalid credentials"}, 400

#dummy data for different tabs in dashboard
@app.get("/api/data/{product_id}")
def get_data(product_id: int):
    if product_id == 1:
        return {
            'cards': [
                {
                    "title": f"Card A{i + 1}",
                    "description": f"Description for Card A{i + 1}",
                    "cost": "$100",
                    "change": f"{random.choice(['+', '-'])}{random.randint(1, 10)}%"
                }
                for i in range(5)
            ],
            "table": [
                {"country": f"Country A{i + 1}", "turnover": f"${i * 500}", "sales_margin": f"{i * 3}%", "sales_margin2": f"{i * 4}%"} for i in range(5)
            ],
            "bar_chart": {
                "categories": [f"Category A{i + 1}" for i in range(5)],
                "values": [i * 15 for i in range(5)],
            },
            "bubble_chart": {
                "categories": [f"Category A{i + 1}" for i in range(5)],
                "x_values": [i for i in range(5)],
                "y_values": [i * 7 for i in range(5)],
                "sizes": [i * 3 for i in range(5)],
            },
        }
    elif product_id == 2:
        return {
            "cards": [
                {"title": f"Card B{i + 1}", "description": f"Description for Card B{i + 1}", "cost": "$200", "change": "+10%"} for i in range(3)
            ],
            "table": [
                {"country": f"Country B{i + 1}", "turnover": f"${i * 700}", "sales_margin": f"{i * 4}%", "sales_margin2": f"{i * 4}%"} for i in range(6)
            ],
            "bar_chart": {
                "categories": [f"Category B{i + 1}" for i in range(6)],
                "values": [i * 20 for i in range(6)],
            },
            "bubble_chart": {
                "categories": [f"Category B{i + 1}" for i in range(6)],
                "x_values": [i for i in range(6)],
                "y_values": [i * 8 for i in range(6)],
                "sizes": [i * 4 for i in range(6)],
            },
        }
    else:
        return {
            "cards": [
                {"title": f"Card C{i + 1}", "description": f"Description for Card C{i + 1}", "cost": "$300", "change": "+15%"} for i in range(2)
            ],
            "table": [
                {"country": f"Country C{i + 1}", "turnover": f"${i * 900}", "sales_margin": f"{i * 6}%", "sales_margin2": f"{i * 4}%"} for i in range(4)
            ],
            "bar_chart": {
                "categories": [f"Category C{i + 1}" for i in range(4)],
                "values": [i * 25 for i in range(4)],
            },
            "bubble_chart": {
                "categories": [f"Category C{i + 1}" for i in range(4)],
                "x_values": [i for i in range(4)],
                "y_values": [i * 10 for i in range(4)],
                "sizes": [i * 5 for i in range(4)],
            },
        }

# Serve the React build folder as static files
# app.mount("/", StaticFiles(directory="../../react/build", html=True), name="static")