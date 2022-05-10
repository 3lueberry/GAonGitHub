string = 'My name is {name}'.format(name='Leonard')
print(string)


name = 'John'
country = 'Singapore'

string = 'My name is {}'.format(name)
string = 'My name is {}. Country of residence is {}'.format(name, country)

string = 'My name is {0}. {0} was given to me by my parents'.format(name)
string = 'My country of residence is {1}. My name is {0}. {0} was given to me by my parents.'.format(name, country)

print(string)

string = f'My name is {name}'
string = (
    f'etc etc {name}'
    f'blah {country}'
)

print(string)

x = format(1/3, '.3f')
x = format(5200, ',d')
