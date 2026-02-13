#!/bin/bash

# Configuration
DEST_HOST="landing-pages"
DEST_PATH="/home/baker"
ZIP_FILE="deploy_package.zip"

echo "Creating zip package..."
# Zip files, excluding git configs, the script itself, and any existing zip
zip -r -q "$ZIP_FILE" . -x "*.git*" "*.gitignore" "deploy.sh" "$ZIP_FILE"

echo "Uploading $ZIP_FILE to $DEST_HOST..."
scp "$ZIP_FILE" "$DEST_HOST:$DEST_PATH"

echo "Deploying on remote server (Unzipping)..."
# Unzip and remove the zip file on the remote server
# -o: overwrite existing files without prompting
ssh "$DEST_HOST" "cd $DEST_PATH"

echo "Cleaning up local zip..."
rm "$ZIP_FILE"

echo "Deployment complete!"
