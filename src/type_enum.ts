// Type ENUM

enum DesignColors{
  white = "#FFFFFF",
  black = "#000000"
}

console.log(DesignColors.black)


enum StatusPermission{
  ADMIN,
  USER,
  SUPPORT
}

console.log(StatusPermission.SUPPORT)

if(StatusPermission.SUPPORT === 2 ){
  console.log("Acesso Liberado!")
} else {
  console.log("Acesso Negado!")
}