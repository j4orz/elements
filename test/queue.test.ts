import Queue from '../src/data-structures/queue'
import { EMPTY_LIST_ERROR } from '../src/data-structures/utils'

describe('Queue', () => {
  let queue: Queue<number>

  beforeEach(() => {
    queue = new Queue()
  })

  describe('throwing', () => {
    it('throws when pop() is called on empty stack', () => {
      expect(() => {
        queue.dequeue()
      }).toThrow(EMPTY_LIST_ERROR)
    })

    it('throws when peek() is called on empty stack', () => {
      expect(() => {
        queue.peekFront()
      }).toThrow(EMPTY_LIST_ERROR)

      expect(() => {
        queue.peekBack()
      }).toThrow(EMPTY_LIST_ERROR)
    })
  })

  it('is empty', () => {
    expect(queue.isEmpty()).toBe(true)
  })

  it('enqueues', () => {
    queue.enqueue(1)
    expect(queue.size()).toBe(1)

    queue.enqueue(2)
    expect(queue.size()).toBe(2)

    queue.enqueue(3)
    expect(queue.size()).toBe(3)
  })

  it('dequeues', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    const val1 = queue.dequeue()
    expect(val1).toBe(1)
    expect(queue.size()).toBe(2)

    const val2 = queue.dequeue()
    expect(val2).toBe(2)
    expect(queue.size()).toBe(1)

    const val3 = queue.dequeue()
    expect(val3).toBe(3)
    expect(queue.size()).toBe(0)
  })

  it('finds out if list contains element', () => {
    expect(queue.contains(1)).toBe(false)
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    expect(queue.contains(1)).toBe(true)
    expect(queue.contains(3)).toBe(true)
    expect(queue.contains(8)).toBe(false)
  })

  it('peeks', () => {
    queue.enqueue(1)
    expect(queue.peekFront()).toBe(1)
    expect(queue.peekBack()).toBe(1)

    queue.enqueue(2)
    expect(queue.peekFront()).toBe(1)
    expect(queue.peekBack()).toBe(2)
  })

  it('clears the list', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    queue.clear()
    expect(queue.isEmpty()).toBe(true)

    queue.enqueue(1)
    queue.clear()
    expect(queue.isEmpty()).toBe(true)

    queue.clear()
    expect(queue.isEmpty()).toBe(true)
  })

  it('is iterable', () => {
    const nums = [1, 2, 3]

    for (const n of nums) {
      queue.enqueue(n)
    }

    let i = 2
    for (const n of queue) {
      expect(n).toBe(nums[i])
      i -= 1
    }
  })
})
