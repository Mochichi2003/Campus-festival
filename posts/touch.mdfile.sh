for i in {25..30}
do
  # touch "10${i}.md"
  # rm 10${i}.md 
  echo "---
title: \"\"
author: \"\"
# url: \"https://twitter.com/ajisaigohan\"
# img: \"posts_icon/0${i}/icon.png\"
proN: false

---" >> 10${i}.md

  echo "10${i}.md に書き込みました"
done