#!/bin/sh

# List
# https://developer.sketch.com/cli/
echo "Listing from Sketch"
/Applications/Sketch.app/Contents/Resources/sketchtool/bin/sketchtool list artboards ./icons.sketch

# Export
# https://developer.sketch.com/cli/
echo "Exporting from Sketch"
/Applications/Sketch.app/Contents/Resources/sketchtool/bin/sketchtool export artboards icons.sketch --output=exports --formats=svg --overwriting=YES

# Delete icons
echo "Deleting optimised icons"
# rm -r ./icons/*
# rm -r ./docs/static/svg/*

# Optimise 
# https://github.com/svg/svgo/#cli
echo "Optimising icons"
# svgo -f src -r -o icons/svg --config=svgo.json

# Generate sprite
# https://github.com/jkphl/svg-sprite/blob/master/docs/command-line.md
echo "Generating sprite"
# svg-sprite --config sprite.json './icons/./**/*.svg'

# Copy 
echo "Copying icons"
# rsync -a ./icons/svg/. ./docs/static/svg/
# cp ./icons/sprite.svg ./docs/static/sprite.svg
