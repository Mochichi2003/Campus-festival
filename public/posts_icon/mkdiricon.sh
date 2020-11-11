for i in {23..30}
do
  rm -rf "${i}"
  echo "${i}を削除しました"
  echo "0${i}を作成しました"
  mkdir "0${i}"
done