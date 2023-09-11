# 获取当前分支名
branch_name=`git symbolic-ref --short -q HEAD`
# 分支类型
branch_type=`echo $branch_name | awk '{split($1, arr, "/"); print arr[1]}'`
# 获取分支名
name=`echo $branch_name | awk '{split($1, arr, "/"); print arr[2]}'`
# 合并到develop分支
if [ $branch_type = "feature" ]; then
  # 合并分支到develop
  git flow $branch_type finish $name 
fi