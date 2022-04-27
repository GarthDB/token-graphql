import Foundation
import RealmSwift

class Static Color: Object {
}

class Task: Object {
    @objc dynamic var _id: Int = 0
    @objc dynamic var name: String = ""
    @objc dynamic var status: String? = nil

    override static func primaryKey() -> String? {
        return "_id"
    }
}

class Test: Object {
    @objc dynamic var _id: ObjectId = ObjectId()
    @objc dynamic var color: Task?

    override static func primaryKey() -> String? {
        return "_id"
    }
}

