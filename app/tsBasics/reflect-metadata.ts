import 'reflect-metadata'

//region reflect-metadata (npm i reflect-metadata)
function ReflectMetadata(target: Function) {
  Reflect.defineMetadata('a', 1, target)
  const meta = Reflect.getMetadata('a', target)
  console.log(meta) // 1
}

function Prop(target: Object, name: string) {

}

function Injectable(key: string) {
  return (target: Function) => {
    Reflect.defineMetadata(key, 1, target)
    const meta = Reflect.getMetadata(key, target)
    console.log(meta)
  }
}

@ReflectMetadata
export class A {
  @Prop prop: number
}

@Injectable('B') // class B
export class B {
  @Prop prop: number
}

@Injectable('C') // class C
export class C {
  @Prop prop: number

  constructor(@Inject('C') c: C) {

  }
}

//endregion
