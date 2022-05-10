import os
import itertools
# Reading a file

print(os.getcwd())

input_file = open('u4d3/file.txt')
print(input_file.read())
input_file.close()

with open('u4d3/file.txt') as input_file:
    print(input_file.read())


# Writing a file

input_file = open('u4d3/file.txt', 'w')
input_file.write('Apple are delicious\n')
input_file.write('Pears are delicious\n')
input_file.close()


# try/except
my_num = None

while my_num is None:
    try:
        my_num = int(input('Please give me a number:'))
    except ValueError as err:
        print('That was not good input, please try again')
        print('Error was', err)

print('Thanks for typing the number', my_num)


# itertools
# groupby()

numbers = ['one', 'two', 'three', 'one', 'one', 'four']

for key, group in itertools.groupby(numbers):
    print(key, group)


print('')

# sort()
numbers.sort()

for key, group in itertools.groupby(numbers):
    print(key, list(group))

new_numbers = [1, 12, 5, 10, 23, 2]
new_numbers.sort()
print(new_numbers)


# chain()
list_1 = ['one', 'two', 'three']
list_2 = range(4)
list_3 = {'trees': 'green'}
big_list = list(itertools.chain(list_1, list_2, list_3))
print(big_list)


# accumulate()
primes = [1, 3, 5, 7, 13, 17, 19, 23, 29]
temp = itertools.accumulate(primes)
result = list(temp)
print(temp, result)


# List Comprehension
# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers = range(1, 11)

square_numbers = [i ** 2 for i in numbers]
print(square_numbers)

# square_numbers = [i ** 2 for i in numbers if i % 2 == 0]
square_numbers = [i ** 2 for i in numbers if not i % 2]
print(square_numbers)

