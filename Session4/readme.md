change 1

change 2

change 3

change hw1

change hw2

Abvoe are all the commits (first three are from the main branch and last two are from the hw branch) made in the readme.md file. The last two commits are not present in the main branch.

below are all the commands used to create the above commits (Task 2).

```bash
git init
git remote -v
git remote add origin https://github.com/Raam751/devops-heros.git
git add .
git commit -m "session2"
git push -u origin main
git push -u origin main --force
git switch -c homeworkbranch
git branch
git status
git add Session4/readme.md
git commit -m "firstchange"
git push -u origin homeworkbranch
git log --oneline --all
git switch main
git cherry-pick 8528883
git push origin main
```

Task1: 

```bash
git commit -a -m
```

result: 
git commit -a -m "
testing git commit -a -m command"
[main ed592da] testing git commit -a -m command
 4 files changed, 49 insertions(+), 4 deletions(-)
 create mode 100644 Session8/docker-compose.yml

