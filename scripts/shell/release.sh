# 获取当前分支名
branch_name=`git symbolic-ref --short -q HEAD`
# 分支类型
branch_type=`echo $branch_name | awk '{split($1, arr, "/"); print arr[1]}'`
# 获取版本号
tag=`echo $branch_name | awk '{split($1, arr, "/"); print arr[2]}'`
# release、hotfix分支才需要打版
if [ $branch_type = "release" ] || [ $branch_type = "hotfix" ]; then
  # 获取远程分支所有版本
  git fetch --tags
  # 输出日志，并打版
  standard-version --release-as $tag
  # 暂存日志更改
  git add .
  # 将日志提交
  git commit --amend
  # 合并分支到develop和master
  git flow $branch_type finish -n $tag 
fi
