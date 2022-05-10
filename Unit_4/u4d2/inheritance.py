class Personnel:

    def __init__(self, name):
        self.name = name

    def who_am_i(self):
        print(f'I am {self.name}')


class Manager(Personnel):

    def __init__(self, name, managing):
        Personnel.__init__(self, name)
        self.managing = managing

    def who_do_you_manage(self):
        print(f'I manage {self.managing}')


manager = Manager("John", "store")

