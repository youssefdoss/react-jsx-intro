'use strict';

/** NamedComponent: renders a p that accepts a property "name" and displays
 * "My name is 'name'""
 *
 * name: string
 */

function NamedComponent({ name }) {
  return (
    <p>My name is { name }</p>);
}