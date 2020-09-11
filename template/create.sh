#!/usr/bin/env sh
# npm run create pageName
create () {
 if [[ $REPLY =~ ^[Yy]$ ]]
 then
  PATH_DIR="./src/components/$NAME"
 else
  PATH_DIR="./src/views/$NAME"
 fi
 
 if [ ! -d "$PATH_DIR" ]
 then
 mkdir $PATH_DIR
 if [[ $PATH_DIR =~ "components" ]]
 then
  CLASS_NAME="component-$NAME"
  cp $COMPONENT_PATH "$PATH_DIR/index.vue"
 else
  CLASS_NAME="page-$NAME"
  cp $PAGE_PATH "$PATH_DIR/index.vue"
  cp -R $PAGE_JS_PATH "$PATH_DIR/src"
 fi
 find $PATH_DIR \( -name "*.vue" -o -name "*.js" -o -name "*.scss" \) -exec sed -i '' -e 's/${pageName}/'"${NAME}"'/g' -e 's/${Author}/'"${Author}"'/g' -e 's/${Email}/'"${Email}"'/g' -e 's/${CurrentDate}/'"${CurrentDate}"'/g' {} \;
 
 echo -e "\n生成完成 \n... \n"
 else
 echo -e "\n已存在文件夹 \n$PATH_DIR"
 fi
}
 
set -e
echo "开始生成代码..."
COMPONENT_PATH="./template/component.vue"
PAGE_PATH="./template/page/index.vue"
PAGE_JS_PATH="./template/page/src"
if [[ -n $1 ]]
then
 NAME=$1
 Author=""
 Email=""
 CurrentDate=$(date +%Y-%m-%d)
 read -p "请问代码 $NAME - 是否是组件 ? (y/n)" -n 1 -r
 echo "\n请输入作者姓名！"
 read Author
 echo "\n请输入作者邮箱！"
 read Email
else
 echo "未发现名称, 请输入名称？"
 read NAME
 read -p "请问代码 $NAME - 是否是组件 ? (y/n)" -n 1 -r
 echo "\n请输入作者姓名！"
 read Author
 echo "\n请输入作者邮箱！"
 read Email
fi
 create
