import csv

# Data to be written to CSV
data = [
    ["title", "latitude", "longitude"],
    ["Space Needle", 47.6205, -122.3493],
    ["Pike Place Market", 47.6097, -122.3419],
    ["Chihuly Garden and Glass", 47.6205, -122.3503],
    ["Seattle Aquarium", 47.6097, -122.3422],
    ["Seattle Great Wheel", 47.6095, -122.3421],
    ["Discovery Park", 47.6656, -122.4077],
    ["University of Washington", 47.6556, -122.3035],
    ["Seattle Public Library", 47.6067, -122.3325],
    ["Fremont Troll", 47.6501, -122.3507],
    ["Gas Works Park", 47.6452, -122.3347]
]

# Write to CSV
filename = "seattle_landmarks.csv"
with open(filename, mode='w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file)
    writer.writerows(data)

print(f"CSV file has been saved as {filename}")
