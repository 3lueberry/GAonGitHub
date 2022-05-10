import re
import copy
import file_2

number = 45

if number < 10 or number > 20:
    print(f'{number} is not between 10 and 20')
else:
    print(f'{number} is between 10 and 20')

if number > 10 and number < 20:
    print(f'{number} is between 10 and 20')
else:
    print(f'{number} is not between 10 and 20')

number = 15
if 10 < number < 20:
    print(f'{number} is between 10 and 20')

the_list = list()
the_list.insert(1, 'test')
print(f'{the_list}')
the_list = []

trees = ['rain', 'palm', 'coconut']
items = ['remote', 2]
print(f'{items[0]}')
print(f'{len(trees)}')

trees.append('angsana')
trees.insert(0, 'flame of the forest')
print(f'{trees}')
tree = trees.pop(trees.index('coconut'))
print(f'{tree}')

for item in trees:
    print(f'{item}')

for x in range(6):
    print(x)

for x in range(1, 6):
    print(x)

for x in range(1, 10, 2):
    print(x)

for char in 'hello':
    print(f'{char}')

count = 0
while count < 10:
    print(count)
    count += 1


def function_name(arg_1, arg_2):
    # code
    return arg_1


def cal_area(height=10, width=20):
    return height * width


area = cal_area(20, 30)
print(area)


the_list = [1, 2, 3]
the_new_list = the_list
the_list_clone1 = list(the_list)
the_list_clone2 = the_list[:]   # shallow copy
the_list_clone3 = the_list.copy()

copied = copy.copy(the_list)    # shallow copy
cloned_list = copy.deepcopy(the_list)

this_dict = dict()
this_dict = {}

this_dict = {'one': 1, 'two': 2, 'three': 2}
this_dict['one'] = 7

for key in this_dict:   # this_dict.keys()
    print(key)

for value in this_dict.values():
    print(value)

for key, value in this_dict.items():
    print(key, value)

this_set = set()
this_set = {1, 2, 3, 4}
this_list = [1, 2, 3, 4, 4, 5, 3]
this_list = list(set(this_list))
for item in this_list:
    print(item)

this_set.remove(3)
for item in this_set:
    print(item)

the_tuple = ('one', 'two', 'three')
print(the_tuple[1])

the_tuple = (1,)    # single element tuple

print(the_tuple[0])
print(type(the_list) == 'list')
print(type(this_list))
print(type(this_dict))


def print_hi(name):
    print(f'Hi, {name}')


if __name__ == '__main__':
    print_hi('u4d1')

file_2.print_hi('calling 2')
