const convertInvalidUserList = ({userId,username}:{userId:string[],username:string[]}) => {
  const userList = [];
  for (let i = 0; i < userId.length; i++) {
    userList.push({
      userId: userId[i],
      username: username[i]
    })
  }
  return userList;
}

export {convertInvalidUserList};