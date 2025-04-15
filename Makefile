.PHONY: logs-backend logs-frontend logs-all shell-backend rebuild rebuild-backend rebuild-frontend restart restart-backend restart-frontend

# 查看后端服务日志
logs-backend:
	docker compose logs -f backend

# 查看前端服务日志
logs-frontend:
	docker compose logs -f frontend

# 查看所有服务日志
logs-all:
	docker compose logs -f

# 进入后端服务shell
shell-backend:
	docker compose exec backend /bin/bash

shell-frontend:
	docker compose exec frontend /bin/bash


# 重新构建所有服务
rebuild:
	docker compose build

refe:
	docker compose build frontend
	docker compose up -d frontend

rebe:
	docker compose build backend
	docker compose up -d backend

# 重启所有服务
restart:
	docker compose down
	docker compose up -d

restart_rebuild:
	make rebuild
	make restart

# 显示帮助信息
help:
	@echo "可用的命令："
	@echo "  make logs-backend    - 查看后端服务日志"
	@echo "  make logs-frontend   - 查看前端服务日志"
	@echo "  make logs-all        - 查看所有服务日志"
	@echo "  make shell-backend   - 进入后端服务shell"
	@echo "  make rebuild         - 重新构建所有服务"
	@echo "  make rebuild-backend - 重新构建后端服务"
	@echo "  make rebuild-frontend- 重新构建前端服务"
	@echo "  make restart         - 重启所有服务"
	@echo "  make restart-backend - 重启后端服务"
	@echo "  make restart-frontend- 重启前端服务" 