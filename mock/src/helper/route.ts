import * as Hapi from 'hapi';

// router 接口，所有 router 都应该实现此接口
interface IRoute {
    register(server: Hapi.Server): Promise<any>;
}

export default IRoute;
