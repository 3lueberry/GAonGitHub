import re

string_1 = 'This is a string with number 65-1234-5678'

pattern_string_1 = r'\d\d-(\d\d\d\d)-(\d\d\d\d)'
pattern_string_2 = r'(\d{2})-(\d{4})-(\d{4})'

matches = re.search(pattern_string_1, string_1)
print(matches.group())
print(matches.group(1))

pattern_1 = re.compile(pattern_string_2)
matches = re.search(pattern_1, string_1)
print(matches.group())
print(matches.group(1))

string_2 = 'grapple vs cripple vs whipple'

matches = re.findall(r'(gra|cri|whi)pple',string_2, re.IGNORECASE)
print(matches[0])

pattern_2 = re.compile(r'(gra|cri|whi)pple', re.IGNORECASE)
matches = re.search(pattern_2, string_2)
print(matches[1])


def print_hi(name):
    print(f'Hi, {name}')


if __name__ == '__main__':
    print_hi('u4d1a')
