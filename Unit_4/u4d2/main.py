class Fruit:

    type = 'Tropical'

    def __init__(self, name, seeds):
        self.name = name
        self.seeds = seeds

    def speak(self):
        print(f'I am a {self.name}')
        print(f'I am a {self.type} fruit')
        print(f'I am a {Fruit.type} fruit')


durian = Fruit('Durian', True)

print(type(durian))

print(durian.type)

durian.speak()
