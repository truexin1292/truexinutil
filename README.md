# truexinutil
自己平时学习封装的方法工具类

git 常用命令：
```node
git add ./
git commit -m 'first commit'
git commit --amend -m 'fixed commit message'
git remote add origin ~~repository's url~~ [例如：https://github.com/trueixn1292/truexinutil.git]
git push -u origin master

进入查看的命令行vim模式；git log / git reflog / git 
退出命令：q
```

```nodemon
$ git reflog
937fd53 HEAD@{0}: commit (amend): add blank line to index.html
7589755 HEAD@{1}: commit (amend): add blank line to index.html
f7ade82 HEAD@{2}: commit (amend): add blank line to index.html
c1c1b21 HEAD@{3}: commit (amend): add blank line to index.html
9ff821d HEAD@{4}: commit: add blank line to index.html

$ git reset --soft HEAD@{2}
```
随即使用 git status 查看状态, 发现 amend 的内容已经被撤销 (到工作区) 了.
如果想撤销到暂存区, 就用 git reset --soft HEAD@{1} .
如果想干掉这个修改, 就用 git reset --hard HEAD@{1} .
这和 git reset 操作 commit 的情形是一样的.

```markdown
git add .
git commit -m "some str"
git push

简化：
git commit -am "some str"
git push
```
