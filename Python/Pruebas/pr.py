#Clase independiente
class Vehiculos():
    def __init__(self,marca,modelo):
        self.marca = marca
        self.modelo = modelo
        self.enMarcha = False
        self.acelera = False
        self.frena = False

    def arrancar(self):
        self.enMarcha = True
    def acelerar(self):
        self.acelera = True
    def frenar(self):
        self.frena = True

    def estado(self):
        print(f"""
        Marca: {self.marca}
        Modelo: {self.modelo}
        En marcha: {self.enMarcha}
        Acelera: {self.acelera}
        Frena: {self.frena}
        """)

#Clase independiente
class VehiculosElectricos():
    def __init__(self) -> None:
        self.autonomia = 100
    def cargarEnergia(self):
        self.cargando = True

# Heredando de la clase "Vehiculos"
class Furgoneta(Vehiculos):
    def carga(self, cargar):
        self.cargado = cargar
        if self.cargado:
            return "La furgoneta esta cargada"
        else:
            return "La furnoneta no esta cargada"

# Heredando de la clase "Vehiculos"
class Moto(Vehiculos):
    haceCaballito = "No hace el caballito"
    def caballito(self):
        self.haceCaballito = "Voy haciendo caballito"

    #Se sobre escribe el metodo de la clase "Vehiculos"
    def estado(self):
        print(f"""
        Marca: {self.marca}
        Modelo: {self.modelo}
        En marcha: {self.enMarcha}
        Acelera: {self.acelera}
        Frena: {self.frena}
        caballito: {self.haceCaballito}
        """)

# Utilizando herencia multiple
# El constructor heredado sera de "VehiculosElectricos"
# Siempre se heredara del primero colocado
# Si existen metodos iguales, se heredaran del primero colocado tambien
class BicicletaElectica(VehiculosElectricos,Vehiculos):
    pass

#instanciando de Moto
miMoto = Moto("Suzuki", "FN125")
miMoto.frenar()
miMoto.estado()

#instanciando de Furgoneta
miFurgoneta = Furgoneta("Toyota", "MDU22")
miFurgoneta.acelerar()
miFurgoneta.estado()

#instanciando de BicicletaElectrica
miBicicleta = BicicletaElectica()
miBicicleta.cargarEnergia()
print(miBicicleta.cargando)