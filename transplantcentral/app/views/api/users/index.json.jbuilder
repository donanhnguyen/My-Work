# json.extract! @all_users

# this is wrong, use json.array! and then the variable and then the attributes you want it to spit out

json.array! @all_users, :id, :username