NOW=$(cat package.json | grep version | cut -d " " -f 4 | tr -d "," | tr -d '"')

# デバッグのため強制回避
# NEXT=$VERSION
NEXT=$NOW

echo "NOW is $NOW"
echo "NEXT is $NEXT"

if [[ $NOW = $NEXT ]]; then
  exit 255
fi

echo need update
# Macでデバッグする際は gnu-sed をインストールするなどした上で、gsedに置き換えて実行してみてください
sed -i package.json -e "s/\"version\": \"$NOW\"/\"version\": \"$NEXT\"/"

git config --global user.name "GitHub Actions"
git config --global user.email "noreply@github.com"

git add package.json
git commit -m "release: update $NEXT"
git push -u origin HEAD

npx can-npm-publish
if [ $? = 1 ]; then
  exit 255
fi

echo ready to publish
# yarn publish
