#!/bin/bash

# Define the search string and the replacement string
search_string="Speaking"
replacement_string="Art"

# Find all files in the folder that contain the search string, excluding the script itself
files_with_string=$(grep -rl --exclude="$0" "$search_string" ~/tailwindui-spotlight)

# Loop through each file and perform the replacement using sed
for file in $files_with_string; do
  LC_ALL=C sed -i '' "s|$search_string|$replacement_string|g" "$file"
done
