#!/bin/bash

# Define the directory containing the files to be renamed
directory_path="$HOME/Desktop/creatives"

# Initialize a counter
counter=1

# Iterate through the files in the directory and rename them sequentially
for file in "$directory_path"/*; do
  # Extract the file extension
  file_extension="${file##*.}"

  # Construct the new file name
  new_file_name="$directory_path/$counter.$file_extension"

  # Rename the file
  mv "$file" "$new_file_name"

  # Increment the counter
  ((counter++))
done

echo "Files have been renamed successfully."
