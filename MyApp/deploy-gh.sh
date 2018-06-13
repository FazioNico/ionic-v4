#!/bin/sh
set -e
git add -f ./www
git add --all
git commit --allow-empty -m 'Update version [ci skip]'
git subtree split -P www -b gh-pages
git rm -r --cached ./www
git add --all
git commit --allow-empty -m 'Deploy to Github Pages [ci skip]'
git push origin gh-pages:gh-pages --force
git branch -D gh-pages
# display result message
echo "Finished Deployment!"