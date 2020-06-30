NOW=$(cat package.json | grep version | cut -d " " -f 4 | tr -d "," | tr -d '"')

NEXT=$VERSION


echo "NOW is $NOW"
echo "NEXT is $NEXT"

if [[ $NOW = $NEXT ]]; then
  echo Version No equal to latest version. Skip release Procedure.
  exit 1
fi

echo Release Process Started...
# Macでデバッグする際は gnu-sed をインストールするなどした上で、gsedに置き換えて実行してみてください
sed -i package.json -e "s/\"version\": \"$NOW\"/\"version\": \"$NEXT\"/"

git config --global user.name "GitHub Actions"
git config --global user.email "noreply@github.com"

git add package.json
git commit -m "release: update $NEXT"
git push -u origin HEAD

npx can-npm-publish
if [ $? != 0 ]; then
  echo This version is Already released. Please Check version No or current version was released manualy.
  exit 1
fi

yarn publish
