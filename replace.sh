#!/bin/bash

# Define the search string and the replacement string
search_string="Spencer Sharp"
replacement_string="Zack Bolich"

# Define the name of the script file to exclude from the search
script_name="replace.sh"

# Find all files in the folder that contain the search string, excluding the script itself
files_with_string=$(grep -rl --exclude="$script_name" "$search_string" ~/tailwindui-spotlight)

# Loop through each file and perform the replacement using sed
for file in $files_with_string; do
  LC_ALL=C sed -i '' "s|$search_string|$replacement_string|g" "$file"
done
