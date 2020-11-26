// @ts-nocheck
import { EntityManager, ObjectLiteral, TreeRepository } from 'typeorm'
import { getEntityManagerOrTransactionManager } from './common'

export class BaseTreeRepository<Entity extends ObjectLiteral> extends TreeRepository<Entity> {
  private _connectionName: string = 'default'
  private _manager: EntityManager | undefined

  set manager(manager: EntityManager) {
    this._manager = manager
    this._connectionName = manager.connection.name
  }

  get manager(): EntityManager {
    return getEntityManagerOrTransactionManager(this._connectionName, this._manager)
  }
}
