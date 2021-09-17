/**
 * Creates class with modifiers
 * Join modifiers with className and returns one
 * @param rootClass
 * @param modifiers
 */
export function classWithModifiers(rootClass: string, ...modifiers: Array<string | number | false | null | undefined>) {
  modifiers = modifiers.filter(Boolean)

  if (modifiers.length === 0) {
    return rootClass
  }

  const space = " "
  const separator = "--"

  return modifiers.reduce<string>((className, modifier) => {
    return className + space + rootClass + separator + modifier
  }, rootClass)
}

/**
 * Assignes classes
 * 
 * @param classNames - Classes to assign
 */
export function mergeClasses(...classNames: Array<string | undefined>) {
  const space = " "
  return classNames.filter(Boolean).join(space)
}