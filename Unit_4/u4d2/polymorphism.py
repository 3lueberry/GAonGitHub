class One:
    def __init__(self, name):
        self.name = name

    @classmethod
    def print_out(cls):
        print('One')


class Two:
    def __init__(self, name):
        self.name = name

    def print_out(self):
        print('Two')


one = One('some')
two = Two('where')


def print_out(calling):
    calling.print_out()


print_out(one)
print_out(two)
